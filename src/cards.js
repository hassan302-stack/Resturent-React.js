import React from 'react'

const Cards = ({ currMenu }) => {
    console.log(currMenu);
    return (
        <>
            <div className="card-container">
                {


                    currMenu.map((curr) => {
                        return (
                            <>

                                <div className="card">

                                    <div className="card-no">{curr.id}</div>
                                    <div className="card-name">
                                        <div className="recipi"><h1>{curr.name}</h1></div>
                                        <div className="card-disc"><p className="text"> {curr.description}</p></div>
                                        <div className="card-img">
                                            <img src={curr.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })


                }
            </div>

        </>
    )
}

export default Cards