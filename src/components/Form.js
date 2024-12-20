import { useState } from "react";

function Form(){
    const initialValue = {
        name: "",
        email: "",
        passward: "",
    }
    const [formData, setformData] = useState(initialValue);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, undefined, 2));

    };
    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setformData({...formData, name: e.target.value})}
            />
            <br/>
            <label>Email</label>
            <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setformData({...formData, email: e.target.value})}
            />
            <br/>
            <label>Passward</label>
            <input 
                type="passward" 
                value={formData.passward}
                onChange={(e) => setformData({...formData,passward: e.target.value})} 
            />
            <br/>
            <button type="submit">Submit</button>
            <p>{JSON.stringify(formData)}</p>
        </form>
    )

}

export default Form;