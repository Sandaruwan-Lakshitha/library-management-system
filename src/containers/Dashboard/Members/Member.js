import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import {
   Container,
   Button,
   FlexRow,
   ContainerInline,
} from "../../../componets/CommonComponents";
import Spinner from "../../../componets/Spinner";
import ConfirmationDialog from "../../../componets/ConfirmationDialog";
import AddEditMemberDialog from "./AddEditMemeberDialog";

import MemberIMG from "../../../shared/user_image.png";

import { deleteMember, editMember } from "../../../api/memberAPI";

import {
   deleteMember as deleteMemberStore,
   updateMember,
} from "../../../store/memberSlice";
const CotainerInlineTextAlignLeft = styled(ContainerInline)`
   align-items: flex-start;
`;

const H4 = styled.h4`
   text-align: left;
   margin-bottom: 1.5em;
`;

function Member({ id, handleBackClick }) {
   const [isLoading, setIsLoading] = useState(false);
   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   const [showEditMemberDialog, setShowEditMemberDialog] = useState(false);

   const books = useSelector((state) => state.books.value);
   const members = useSelector((state) => state.members.value);
   const member = members.find((element) => element.id === id);
   const book = member
      ? books.find((element) => element.burrowedMemberId === member.id)
      : null;

   const dispatch = useDispatch();

   const handleDelete = (confirmation) => {
      if (confirmation) {
         setIsLoading(true);
         deleteMember(member.id)
            .then((response) => {
               if (!response.error) {
                  dispatch(deleteMemberStore(response.data));
                  handleBackClick();
               }
            })
            .catch((error) => {
               console.log(error);
            });
      }
      setShowDeleteConfirmation(false);
   };
   const handleEdit = (confirmed, data) => {
      if (confirmed) {
         setIsLoading(true);
         editMember(member.id, data)
            .then((response) => {
               if (!response.error) {
                  dispatch(updateMember(response.data));
               }
            })
            .catch((error) => {
               console.log(error);
            });
         setIsLoading(false);
      }
      setShowEditMemberDialog(false);
   };

   return (
      <>
         <Container>
            <Button onClick={handleBackClick} size={1.5}>
               <IoReturnUpBack />
            </Button>
            {!isLoading && member != null ? (
               <>
                  <FlexRow>
                     <CotainerInlineTextAlignLeft>
                        <table>
                           <tbody>
                              <tr>
                                 <td>
                                    <H4>Name</H4>
                                 </td>
                                 <td>
                                    <H4>
                                       : {member.firstName} {member.middleName}{" "}
                                       {member.lastName}
                                    </H4>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <H4>NIC Number</H4>
                                 </td>
                                 <td>
                                    <H4>: {member.nic}</H4>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <H4>Contact Number</H4>
                                 </td>
                                 <td>
                                    <H4>: {member.contactNumber}</H4>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <H4>Address</H4>
                                 </td>
                                 <td>
                                    <H4>: {member.address}</H4>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <H4>User Type</H4>
                                 </td>
                                 <td>
                                    <H4>: {member.userType}</H4>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </CotainerInlineTextAlignLeft>
                     <ContainerInline>
                        <img
                           src={MemberIMG}
                           alt="Book Cover place holder"
                           style={{
                              border: "1px solid black",
                              width: "70%",
                           }}
                        />
                     </ContainerInline>
                  </FlexRow>
                  <FlexRow>
                     <>
                        <Button onClick={() => setShowEditMemberDialog(true)}>
                           Edit
                        </Button>
                        {!book ? (
                           <Button
                              color="danger"
                              onClick={() => setShowDeleteConfirmation(true)}
                           >
                              Delete
                           </Button>
                        ) : (
                           ""
                        )}
                     </>
                  </FlexRow>
               </>
            ) : (
               <Spinner />
            )}
         </Container>
         <ConfirmationDialog
            handleClose={handleDelete}
            show={showDeleteConfirmation}
            headerText="Confirm member deletion"
            detailText="Are you sure you wanr to delete this member? This action can't be undone."
         />
         <AddEditMemberDialog
            isEdit={true}
            show={showEditMemberDialog}
            handleClose={handleEdit}
            data={member}
         />
      </>
   );
}
export default Member;
