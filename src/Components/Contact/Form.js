import React from 'react'
export default function Form() {
    return (
        <form action="MAILTO:gino.chasles@gmail.com" method="post" encType="text/plain">
            <label> Name:</label>
            <input type="text" name="name" />
            <input type="text" name="mail" />
            <input type="text" name="comment"  size="50"/>
            <input type="submit" value="Send"/>
            <input type="reset" value="Reset"/>
        </form>
    )
}