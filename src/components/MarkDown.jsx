import React, { useState } from 'react'
import { marked } from 'marked'

const MarkDown = () => {

    const [code, setCode] = useState('## Hello')
    const [preview, setPreview] = useState('<h2 id="hello">Hello</h2>')
    const [hide, setHide] = useState(true)

    const openMD = () =>{
        setHide(true)
    }

    const openPreview = () =>{
        setHide(false)
    }

    const handleChange = (event) =>{
        setCode(event.target.value)
        setPreview(marked.parse(event.target.value))
    }

    return (
        <div>
            <div className="btns">
                <button onClick={openMD}>MarkDown</button>
                <button onClick={openPreview}>Preview</button>
            </div>
            {
                hide ?
                <div>
                    <textarea onChange={handleChange} value={code}></textarea>
                </div>
                :
                <div>
                    <textarea value={preview}></textarea>
                </div>
            }
        </div>
    )
}

export default MarkDown
