import { Button } from "react-bootstrap"

const ButtonsBottom = ({nextPage}) => {
return (
<div className='button-container'>
    <Button className='button-groups mx-auto' variant="primary" type="submit">
      Save & Exit
    </Button>

    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={nextPage}>
      Continue
    </Button>
    </div>)
}

export default ButtonsBottom