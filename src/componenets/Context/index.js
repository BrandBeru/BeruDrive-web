import { useState, createContext, useEffect } from 'react'
import { gapi } from 'gapi-script'

const Context = createContext()

const CLIENT_ID = '35910052181-t1950mf5aeqef4aennlsh4v2gj4ap11q.apps.googleusercontent.com';

const Provider = ({ children }) => {
    const [googleCredential, setGoogleCredential] = useState('')
    const [elements, setElements] = useState([])
    const [recentElements, setRecentElements] = useState([])
    const [searchText, setSearchText] = useState('')
    const [menuHidden, setMenuHidden] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    const [item, setItem] = useState({})

    useEffect(() => {
        async function start() {
            await gapi.client.init({
                clientId: CLIENT_ID,
                scope: "https://www.googleapis.com/auth/drive"
            })
        }
        gapi.load('client:auth2', start)
        listFiles()
    }, [googleCredential])

    const listElements = (count) => {
        return fetch(`https://www.googleapis.com/drive/v3/files?fields=nextPageToken,files(id,name,iconLink,size,modifiedTime,thumbnailLink,owners,starred)&pageSize=${count}`, {
            method: 'get',
            mode: 'cors',
            credentials: 'same-origin',
            headers: new Headers({ 'Authorization': 'Bearer ' + googleCredential.access_token })
        }).then(data => data.json())
    }
    const listFiles = () => {
        listElements(10).then(data => setElements(data.files?.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })))
        listElements(4).then(data => setRecentElements(data.files))
    }
    const sendFiles = (file) => {
        try {
            const fr = new FileReader();
            console.log(file)
            fr.readAsArrayBuffer(file);
            fr.onload = async (f) => {
                // Create the file metadata
                const fileMetadata = {
                    name: file.name,
                    parents: []
                }

                // Create a form data object
                const form = new FormData();
                form.append('metadata', new Blob([JSON.stringify(fileMetadata)], { type: 'application/json' }));
                form.append('file', new Blob([new Uint8Array(f.target.result)], { type: file.type }));

                // Send a fetch request with the access token
                await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: new Headers({ 'Authorization': 'Bearer ' + googleCredential.access_token }),
                    body: form
                }).then(res => res.json()).then(res => console.log(res));
                listFiles()
            };
        } catch (error) {
            console.log(error)
        }

        listElements(10).then(data => setElements(data.files?.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })))
        listElements(6).then(data => setRecentElements(data.files))
    }
    const deleteFile =(fileId) => {
        fetch('https://www.googleapis.com/drive/v2/files/'+fileId, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'same-origin',
            headers: new Headers({ 'Authorization': 'Bearer ' + googleCredential.access_token })
        }).then(data => listFiles())
    }
    const rename = (fileId, name) => {
        var file = {
            name
        }
        fetch('https://www.googleapis.com/drive/v3/files/'+fileId,{
            method: 'PATCH',
            mode: 'cors',
            credentials: 'same-origin',
            headers: new Headers({ 'Authorization': 'Bearer ' + googleCredential.access_token }),
            body: JSON.stringify(file)
        }).then(data => listFiles())
    }
    const star = (fileId, starred) => {
        var file = {
            starred
        }
        fetch('https://www.googleapis.com/drive/v3/files/'+fileId,{
            method: 'PATCH',
            mode: 'cors',
            credentials: 'same-origin',
            headers: new Headers({ 'Authorization': 'Bearer ' + googleCredential.access_token }),
            body: JSON.stringify(file)
        }).then(data => listFiles())
    }
    const download = (fileId, name) => {
        try{
            fetch('https://www.googleapis.com/drive/v3/files/'+fileId+"?alt=media",{
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: new Headers({ 'Authorization': 'Bearer ' + googleCredential.access_token }),
            })
            .then(res => res.blob())
            .then(blob => {
                var a = document.createElement('a');
                console.log(blob)
                a.download = name;
                a.href = window.URL.createObjectURL(blob);
                a.click();
            })
        }catch(error){
            console.log(error)
        }
    }

    const handleFileChange = file => {
        sendFiles(file)
        listFiles()
    };

    const searchItems = searchText ? elements?.filter((item) => {
        return item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    }) : elements

    return (
        <Context.Provider
            value={
                {
                    elements,
                    setElements,
                    recentElements,
                    setRecentElements,
                    menuHidden,
                    setMenuHidden,
                    googleCredential,
                    setGoogleCredential,
                    searchText,
                    setSearchText,
                    searchItems,
                    handleFileChange,
                    listFiles,
                    deleteFile,
                    openModal,
                    setOpenModal,
                    item,
                    setItem,
                    rename,
                    download,
                    star,
                    CLIENT_ID,
                }
            }>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }