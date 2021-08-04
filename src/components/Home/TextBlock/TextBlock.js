import './TextBlock.css'


const TextBlock = (props) => {
    return ( 

        <div className="text-block">
            <h1>{props.header}</h1>
        </div>
        

     );
}
 
export default TextBlock;