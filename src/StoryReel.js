import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" 
				profileSrc="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
				title = "Yoyo"
            />
				 <Story 
            image = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" 
				profileSrc="https://static.toiimg.com/photo/76729750.cms"
				title = "Xiao bui"
            />
				 <Story 
            image = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" 
				profileSrc="https://lh3.googleusercontent.com/proxy/VJxM9EyOdOm1hCbPpRHz0qiru5ifoescmTCjxdDAMF0dB55qk8ywtLQfkbCYYcD_WTfAuWw2UQfrH7b5m3Flr9KnE48MPcJPqNiA24Wuz9D_ZXVJS5ffow"
				title = "Ah dai"
            />
				 <Story 
            image = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" 
				profileSrc="https://yt3.ggpht.com/a/AATXAJzVN-9sZTGpZfsD6gKX0j_2nHv7UkCGTfDx-tXG=s900-c-k-c0x00ffffff-no-rj"
				title = "Bunny"
            />
				 <Story 
            image = "https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
				profileSrc="https://cdn.images.express.co.uk/img/dynamic/59/590x/Facebook-avatar-how-to-use-facebook-avatar-in-messenger-1284156.jpg?r=1597874242767"
				title = "Dan ge"
            />
             <Story 
            image = "https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
				profileSrc="https://cdn.images.express.co.uk/img/dynamic/59/590x/Facebook-avatar-how-to-use-facebook-avatar-in-messenger-1284156.jpg?r=1597874242767"
				title = "Dan ge"
            />
        </div>
    )
}

export default StoryReel
