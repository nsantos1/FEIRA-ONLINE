import "./modalMeusProdutos.css"

export default function ModalMeusProdutos({ isOpen, onClose, children }) {
    if (!isOpen) return null; // Não renderiza se estivar fechado
 
        return (
            <>
                <div className={`modal-overlay-meus-produtos ${isOpen ? "show" : ""}`} onClick={onClose}>
                    <div className="modal-meus-produtos" onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </>
        )
    }