import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/FormStyle/style.module.css";
import { Form, Row, Modal } from "react-bootstrap";
import editIcon from "../../../../Assets/images/edit-icon.png";
import IconButton from "../IconButton";
import { editUser } from "../../../../api/user";

const EditReferee = ({ token, data, setData, heading, buttonLabel, setSignUp, signup }) => {

  // console.log("editReferee");
  // data.isReferee = true;
  // console.log(data);

  const navigate = useNavigate();
  const [updatedData, setUpdatedData] = useState(data);
  useEffect(()=>{
    setUpdatedData(data);
  },[data]);


  const [show, setShow] = useState(signup);
  const handleClose = () => {setShow(false);setUpdatedData(data);}
  const handleShow = () => setShow(true);

  

  const handle = (e) => {
    const CurupdatedData = { ...updatedData };
    CurupdatedData[e.target.id] = e.target.value;
    setUpdatedData(CurupdatedData);
    // console.log(CurupdatedData);
  }

  const SubmithandleClose = ()=>{
    setShow(false)
  }


  return (
    <>
      <IconButton
        icon={editIcon}
        onClick={handleShow}
        alt="Edit Referrer Profile Button"
      />
      <Modal
        show={show}
        dialogClassName={styles.Modal}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
      >
        {signup?<>
        <Modal.Header className={styles.editProfileHeader}>
          <Modal.Title className={styles.editProfileTitle}>
            {heading}
          </Modal.Title>
        </Modal.Header>
        </>:<>
        <Modal.Header className={styles.editProfileHeader} closeButton>
          <Modal.Title className={styles.editProfileTitle}>
            {heading}
          </Modal.Title>
        </Modal.Header>
        </>}
        
        <div className={styles.form}>
          <Row>
          <Form onSubmit={(e)=>{e.preventDefault(); 
                                  setData(updatedData); 
                                  SubmithandleClose(); editUser(updatedData); 
                                  setSignUp(false); window.localStorage.setItem('signup','false'); 
                                  if(signup) navigate('/')}}>
              <Modal.Body>
                <div className={styles.formArea}>
                  <Form.Group className="mb-3 mt-3" controlId="name">
                    <Form.Control
                      type="text"
                      value={updatedData.name}
                      placeholder="Full Name"
                      onChange={(e) => handle(e)}
                      required
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-3" controlId="infotext">
                    <Form.Control
                      type="text"
                      value={updatedData.infotext}
                      placeholder="Info"
                      onChange={(e) => handle(e)}
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="institute">
                    <Form.Control
                      type="text"
                      value={updatedData.institute}
                      onChange={(e) => handle(e)}
                      placeholder="Institute"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="branch">
                    <Form.Control
                      type="text"
                      value={updatedData.branch}
                      onChange={(e) => handle(e)}
                      placeholder="Branch"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="cgpa">
                    <Form.Control
                      type="number"
                      value={updatedData.cgpa}
                      placeholder="CGPA(optional)"
                      step="0.01"
                      min="0"
                      max="10"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="linkedin">
                    <Form.Control
                      type="url"
                      value={updatedData.linkedin}
                      onChange={(e) => handle(e)}
                      placeholder="Linkedin"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="codechef">
                    <Form.Control
                      type="url"
                      value={updatedData.codechef}
                      placeholder="Codechef(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="codeforces">
                    <Form.Control
                      type="url"
                      value={updatedData.codeforces}
                      placeholder="Codeforces(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="leetcode">
                    <Form.Control
                      type="url"
                      value={updatedData.leetcode}
                      placeholder="Leetcode(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="github">
                    <Form.Control
                      type="url"
                      value={updatedData.github}
                      placeholder="github(optional)"
                      onChange={(e) => handle(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="resume_link">
                    <Form.Control
                      type="url"
                      value={updatedData.resume_link}
                      placeholder="Resume(GDRIVE LINK)"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="graduating_year">
                    <Form.Control
                      type="number"
                      value={updatedData.graduating_year}
                      placeholder="Graduating Year"
                      onChange={(e) => handle(e)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Control
                      type="tel"
                      value={updatedData.phone_number}
                      placeholder="Mobile Number"
                      onChange={(e) => handle(e)}
                      minLength="10"
                      required
                    />
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer className={styles.editProfileFooter}>
                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    {buttonLabel}
                  </button>
                </div>
              </Modal.Footer>
            </Form>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default EditReferee;
