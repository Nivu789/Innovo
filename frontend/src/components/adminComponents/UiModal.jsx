import React from 'react'

const UiModal = ({heading}) => {

    
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Heading</label>
                                    <input required type="text" value={heading} class={`form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    {/* <div className='d-flex gap-1 mt-1'>{erros.headingError ? <div className='text-danger'>{erros.headingError}</div> : <div className='text-success'>Great</div>}<i class={`bi ${headingError ? "bi-hand-thumbs-down text-danger" : "bi-hand-thumbs-up text-success"}`}></i></div> */}
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Description</label>
                                    <input type="text"   class={`form-control`} id="exampleInputPassword1" />
                                    {/* <div className='d-flex gap-1 mt-1'>{erros.descriptionError ? <div className='text-danger'>{erros.descriptionError}</div> : <div className='text-success'>Great</div>}<i class={`bi ${descriptionError ? "bi-hand-thumbs-down text-danger" : "bi-hand-thumbs-up text-success"}`}></i></div> */}
                                </div>

                                {/* <div class="mb-3">
                                    {data.image && <img src={`http://localhost:3000/${data.image.replace(/\\/g, '/')}`} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />}
                                    <label for="exampleInputPassword1" class="form-label">Image</label>
                                    <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} class="form-control" id="exampleInputImage" />
                                </div> */}

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default UiModal