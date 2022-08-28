import {useState} from 'react'

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (
        <ul className="rating">
            {[...Array(10)].map((x, i) => (
            <li key={i}>
                <input 
                    type="radio"
                    id={`num${i+1}`}
                    name="rating"
                    value={i+1}
                    onChange={handleChange}
                    checked={selected === i+1}
                />
                <label htmlFor={`num${i+1}`}>{i+1}</label>
            </li>
            ) )}
        </ul>
    )
}

export default RatingSelect