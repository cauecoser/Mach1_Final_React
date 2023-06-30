import './menu.css'

export default function Menu() {
    return (
        // <div className='modal-background'>
            <div className="menu-container">
                <svg className='new-edit-icon' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_114_130)">
                        <path d="M11.1833 3.2L13.6889 5.70555C13.7944 5.81111 13.7944 5.98333 13.6889 6.08889L7.62222 12.1556L5.04444 12.4417C4.7 12.4806 4.40833 12.1889 4.44722 11.8444L4.73333 9.26667L10.8 3.2C10.9056 3.09444 11.0778 3.09444 11.1833 3.2ZM15.6833 2.56389L14.3278 1.20833C13.9056 0.786111 13.2194 0.786111 12.7944 1.20833L11.8111 2.19167C11.7056 2.29722 11.7056 2.46944 11.8111 2.575L14.3167 5.08055C14.4222 5.18611 14.5944 5.18611 14.7 5.08055L15.6833 4.09722C16.1056 3.67222 16.1056 2.98611 15.6833 2.56389ZM10.6667 10.5056V13.3333H1.77778V4.44444H8.16111C8.25 4.44444 8.33333 4.40833 8.39722 4.34722L9.50833 3.23611C9.71944 3.025 9.56944 2.66667 9.27222 2.66667H1.33333C0.597222 2.66667 0 3.26389 0 4V13.7778C0 14.5139 0.597222 15.1111 1.33333 15.1111H11.1111C11.8472 15.1111 12.4444 14.5139 12.4444 13.7778V9.39444C12.4444 9.09722 12.0861 8.95 11.875 9.15833L10.7639 10.2694C10.7028 10.3333 10.6667 10.4167 10.6667 10.5056Z" fill="#EF807C" />
                    </g>
                    <defs>
                        <clipPath id="clip0_114_130">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className='butt-group'>
                    <button className="butt">Edit</button>
                    {/* <button className="butt">Listar</button> */}
                    <button className="butt">Iniciar</button>
                    <button className="butt">Finalizar</button>
                </div>
            </div>
        // </div>
    )
}