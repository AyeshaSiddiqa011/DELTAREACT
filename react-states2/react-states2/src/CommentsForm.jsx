import { useState } from "react"

export default function CommentsForm () {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });
    let handelInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    }

    let handelSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
       
    }
    return(
        <div>
               <h4>Give a Comment</h4>

            <form onSubmit={handelSubmit}>
            <label htmlFor="username">Username</label>
            <input placeholder="username" type="text" value={formData.username} onChange={handelInputChange} id="username" name="username"/>
            <br /><br />

            <label htmlFor="remarks">Textarea</label>
                <textarea value={formData.remarks} placeholder="add few remarks" onChange={handelInputChange} id="remarks" name="remarks">Remarks</textarea>
            <br /><br />

            <label htmlFor="rating">Rating</label>
            <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handelInputChange} id="rating" name="rating"/>
            <br /><br />

            <button>Add Comment</button>
            </form>
        </div>
    )
}