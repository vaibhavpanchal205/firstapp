import { useState } from "react";

function Form(){
    const initialValue = {
        name: "",
        email: "",
        passward: ""
    }
    const [formData, setformData] = useState(initialValue);
    return(
        <form>
            <label>Name</label>
            <input type="text" value={formData.name}/>
            <br/>
            <label>Email</label>
            <input type="email" value={formData.email} />
            <br/>
            <label>Password</label>
            <input type="password" value={formData.password} />
            <button type="submit">Submit</button>
        </form>
    )

}

export default Form;