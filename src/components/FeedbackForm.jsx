import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useState} from 'react'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const handeTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false);
            setMessage(null)
        }
        
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text, rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2>How you doing?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handeTextChange} type="text" placeholder="Write here" value={text} />
                    <Button type="submit" children="Send" isDisabled={btnDisabled} />
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm