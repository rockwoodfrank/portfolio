import React from "react"

/*
    Test to see feasibility of putting svg in components
*/
export default function TestSVG({}): React.JSX.Element
{
    return (
        <>
            {/* Blue response */}
                <path className="blueResponse" fill="none" d="M232 203C264.809 192.836 266.722 89.7462 291.653 90.0005C320.32 90.293 319.094 185.064 339.973 179.085C360.851 173.106 358.163 154.201 373.975 156.365C396.302 159.422 399.127 192.012 420.505 197.021C429.493 199.127 430.646 194.032 443.77 192.836C456.894 191.64 473 197.021 473 197.021" stroke="#0000FF" stroke-width="6" stroke-linecap="round"/>
                {/* Red response */}
                <path className="redResponse" fill="none" d="M231 203C247 203 263.5 206.883 276 203C308.716 192.836 310.623 89.7461 335.483 90.0005C364.067 90.2929 362.845 185.064 383.664 179.085C404.483 173.106 401.802 154.201 417.569 156.365C442 159.719 447.8 192.2 473 197" stroke="#FF0000" stroke-width="6" stroke-linecap="round"/> 

        </>
    )
}