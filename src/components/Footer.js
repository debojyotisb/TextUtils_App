import '../App.css';

export default function Footer (props) {
    return (
    <footer className='container mb-5' style={{color: props.mode === 'light'?"black":"wheat", display: 'flex', justifyContent: 'center'}}>
        
        <small>&copy; No Copyright Issue, Feel free to use 👌 </small>
        <a href='https://github.com/debojyotisb/TextUtils_App'> 
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" style={{width: '30px', height: '30px', display: 'flex', marginLeft: '5px', marginTop: '-5px', backgroundColor: props.mode === 'light'?"b6dcf0":"wheat", borderRadius: '50%' }} ></img>
        </a>
    </footer>

    )
}
