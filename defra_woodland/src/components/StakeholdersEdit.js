import { Button } from "react-bootstrap"

const StakeholdersEdit = ( { onClick , text} ) => {
    return (
        <Button className='button-groups mx-auto' variant="primary" type="submit" onClick={onClick}>
            {text}
        </Button>
    )
}

export default StakeholdersEdit