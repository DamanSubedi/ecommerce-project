
export default function Banner({ title, info, children }) {

    return (<>
        <div className="banner">

            <div className="banner_center">

                <div className="banner_text">
                    <h1>
                        {title}
                    </h1>
                    <span>
                        {info}
                    </span>
                </div>
                <div className="underline"/>
                {children}
            </div>
        </div>
    </>
    )
}


