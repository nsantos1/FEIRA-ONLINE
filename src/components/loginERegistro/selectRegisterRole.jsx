import { useEffect, useRef, useState } from "react";

import "./selectRegisterRole.css";

export default function SelectRegisterRole({ options, value, onChange }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (option => {
        onChange(option);
        setOpen(false);
    });

    return (
        <>
            <label htmlFor="select-register-role">Cargo</label>
            <div ref={dropdownRef} className="select-register-role" id="select-register-role">
                <div
                    className="select-register-role-selected"
                    onClick={() => setOpen(!open)}
                >
                    {value.charAt(0).toUpperCase() + value.slice(1) || "Escolha uma opção"}
                </div>

                {open && (
                    <ul className="select-register-role-options">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                className="select-register-role-option"
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}