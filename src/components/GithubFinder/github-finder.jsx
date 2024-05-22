import { useState } from "react"
import { UsefetchData } from "./Usefetchdata"

import "./git-styles.css"

export const Githubfinder = () => {

    const [value, setValue] = useState("")
    const [username, setUsername] = useState("SyamSundar-007")
    const data = UsefetchData(`https://api.github.com/users/${username}`)

    console.table(data)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        setUsername(value)
    }

    if (data == null) {
        return <div>Data is Loading</div>
    }

    return <div className="main-container">
        <div className="main-container-wrapper">
            <div className="input-area">
                <input placeholder="Search the profile" onChange={handleChange}></input>
                <button onClick={handleClick}> Search </button>
                {/* <div>Search Value: {value}</div>
                <div>Clicked Value: {username}</div> */}
            </div>

            <div className="user-details-container">
                <div className="profile-pic">
                    <img src={data.avatar_url} alt={data.login}></img>
                </div>
                <div className="profile-content">
                    <a href={`https://github.com/${data.login}`} target="_blank">{data.login}</a>
                    <div>No.of Repos: {data.public_repos}</div>
                    <div>No.of Followers: {data.followers}</div>
                    <div>No.of Following: {data.following}</div>
                </div>
            </div>

        </div>
    </div>

}