import React, { useRef, useState } from 'react';
import './styles/RoomDesign.css';
import { setDataAction } from '../action/dataAction';
import { useDispatch } from 'react-redux';

function RoomDesign(props) {
    const dispatch = useDispatch()

    const { Data } = props
    const modalRef = useRef(null);
    const cmtModalRef = useRef(null);
    const [isImageModal, setImageModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [image, setImage] = useState('')
    const [comment, setComment] = useState({ id: '', userName: '', commentTxt: '' })

    const showModal = (image) => {
        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.classList.add('show');
            modalElement.style.display = 'block';
            const myInput = modalElement.querySelector('#myInput');
            if (myInput) {
                myInput.focus();
            }
            setImage(image)
            setImageModal(true);
        }
    };

    const closeModal = () => {
        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.classList.remove('show');
            modalElement.style.display = 'none';
            setImage('')
            setImageModal(false);
        }
    };

    const showCmtModal = (id) => {
        const modalElement = cmtModalRef.current;
        if (modalElement) {
            modalElement.classList.add('show');
            modalElement.style.display = 'block';
            const myInput = modalElement.querySelector('#myInput');
            if (myInput) {
                myInput.focus();
            }
            setIsModalOpen(true);
            setComment({ id: id, userName: '', commentTxt: '' })
        }
    };

    const closeCmtModal = () => {
        const modalElement = cmtModalRef.current;
        if (modalElement) {
            modalElement.classList.remove('show');
            modalElement.style.display = 'none';
            setIsModalOpen(false);
            setComment({ id: '', userName: '', commentTxt: '' })
        }
    };

    const like = (id) => {
        const data = Data.map((e) => {
            return e.id === id ? { ...e, like: true } : e
        })
        sessionStorage.setItem('roomData', JSON.stringify(data))
        dispatch(setDataAction(data));
    };

    const disLike = (id) => {
        const data = Data.map((e) => {
            return e.id === id ? { ...e, like: false } : e
        })
        sessionStorage.setItem('roomData', JSON.stringify(data))
        dispatch(setDataAction(data));
    }
    const saveComment = (e) => {
        const data = Data.map((ele) => {
            return ele.id === e.id ? { ...ele, comment: [...ele.comment, { userName: e.userName, comment: e.commentTxt }] } : ele
        })
        sessionStorage.setItem('roomData', JSON.stringify(data))
        dispatch(setDataAction(data));
        closeCmtModal()
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="row">
                {Data.map((e) => (
                    <div className="col-sm-4 p-3" key={e.id}>
                        <div className="card">
                            <img src={e.image} className="card-img-top card-image" alt={`${e.roomName}`} />
                            <span className='position-absolute p-1 top-0 end-0' onClick={() => { showModal(e.image) }}>
                                <img src='https://www.superbolter.com/Images/expand-white.svg' alt='expand' className='expand' />
                            </span>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-8 sm-8">
                                        <p className="card-text">{e.roomName}</p>
                                    </div>
                                    <div className="col-4 sm-4">
                                        <div className='row'>
                                            <div className='col-6 sm-6'>
                                                <i className="bi bi-chat-left-text" onClick={() => { showCmtModal(e.id) }}></i>
                                            </div>
                                            <div className='col-6 sm-6'>
                                                {e.like && <i className="bi bi-heart-fill" onClick={() => { disLike(e.id) }}></i>}
                                                {!e.like && <i className="bi bi-heart" onClick={() => { like(e.id) }}></i>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`modal${isImageModal ? ' show' : ''}`} ref={modalRef} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body image-body">
                                        <img src={image} className="card-img-top modal-image" alt={`${e.roomName}`} />
                                        <span className='position-absolute p-1 top-0 end-0' onClick={() => { closeModal() }}>
                                            <img src='https://img.icons8.com/windows/32/FFFFFF/delete-sign.png' alt='close' className='close' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`modal${isModalOpen ? ' show' : ''}`} ref={cmtModalRef} tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered ">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Comment</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { closeCmtModal() }}></button>
                                    </div>
                                    <div className="modal-body cmt-body">
                                        <div className="row">
                                            <form>
                                                <div className="form-group">
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" id="name" required={true} placeholder="User name" value={comment.userName} onChange={(e) => { setComment({ ...comment, userName: e.target.value }) }} />
                                                    </div>
                                                    <div className="input-group">
                                                        <textarea className="form-control" aria-label="With textarea" required={true} placeholder="Comment" value={comment.commentTxt} onChange={(e) => { setComment({ ...comment, commentTxt: e.target.value }) }} />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { closeCmtModal() }}>Close</button>
                                        <button type="button" className="btn btn-primary" onClick={() => { saveComment(comment) }}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RoomDesign;
