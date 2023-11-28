import { Card, Container } from "react-bootstrap"
import DefraFormPage2 from "./DefraFormPage2";
import DefraFormLogin from "./DefraFormLogin";
import DefraFormRegister from "./DefraFormRegister";
import DefraFormPage1 from "./DefraFormPage1";
import NavigationBar from "./NavigationBar";
import DefraFormPage3 from "./DefraFormPage3";
import DefraFormPage4 from "./DefraFormPage4";
import DefraFormPage5 from "./DefraFormPage5";
import DefraFormPage6 from "./DefraFormPage6";
import { useEffect, useState } from "react";
import DefraFormPage7 from "./DefraFormPage7";
import DefraFormPage8 from "./DefraFormPage8";


const FormComponent = () => {

    // const [currentPage, setCurrentPage] = useState(0)

    // useEffect(() => {
    //     const savedPage = JSON.parse(localStorage.getItem('page'))
    //     if(savedPage){
    //         setCurrentPage(savedPage)
    //     }
    // }, [])

    // const navigateNextPage = (event) => {
    //     event.preventDefault()
    //     const changedPage = currentPage + 1
    //     setCurrentPage(changedPage)
    //     localStorage.setItem('page', changedPage)
    // }

    // const navigatePreviousPage = (event) => {
    //     event.preventDefault()
    //     const changedPage = currentPage - 1
    //     setCurrentPage(changedPage)
    //     localStorage.setItem('page', changedPage)
    // }

    // const pages = [<DefraFormLogin nextPage={navigateNextPage}/>,
    //                 <DefraFormRegister nextPage={navigateNextPage}/>,
    //                 <DefraFormPage1 nextPage={navigateNextPage} />,
    //                 <DefraFormPage2 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>,
    //                 <DefraFormPage3 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>,
    //                 <DefraFormPage4 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>,
    //                 <DefraFormPage5 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>,
    //                 <DefraFormPage6 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>,
    //                 <DefraFormPage7 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>,
    //                 <DefraFormPage8 nextPage={navigateNextPage} previousPage={navigatePreviousPage}/>]  

    // return(
    //     <Container className="form-container">
    //         <Card>
    //             <NavigationBar />
    //             <Card.Body>
    //                 {pages[currentPage]}
    //             </Card.Body>
    //         </Card>
    //     </Container>
    // )

    return (
        <Container className="form-container">
            <Card>
                <NavigationBar />
                <Card.Body>
                    {/* <DefraFormLogin /> */}
                    {/* <DefraFormRegister /> */}
                    {/* <DefraFormPage1 /> */}
                    {/* <DefraFormPage2 /> */}
                    {/* <DefraFormPage3 /> */}
                    {/* <DefraFormPage4 /> */}
                    {/* <DefraFormPage5 /> */}
                    {/* <DefraFormPage6 /> */}
                    {/* <DefraFormPage7 /> */}
                    <DefraFormPage8 />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default FormComponent;