import { Button } from "react-bootstrap"

const ButtonsBottomThree = ({nextPage, previousPage}) => {
return (
<div className='button-container'>
    <Button className='button-groups mx-auto' variant="primary" type="submit">
      Save & Exit
    </Button>

    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={previousPage}>
      Back
    </Button>

    <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={nextPage}>
      Continue
    </Button>

    </div>)
}

export default ButtonsBottomThree;