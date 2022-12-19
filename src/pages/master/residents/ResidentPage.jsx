import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchResidentsbyId } from '../../../stores/master/resident-slice';

export default function ResidentPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useRef(true);
  const [details, setDetails] = useState();

  // useEffect(() => {
  //   if (loading.current) {
  //     dispatch(getResidentById(params.id)).then((res) => {
  //       loading.current = false;
  //       setDetails;
  //     });
  //   }
  // }, [dispatch]);

  useEffect(() => {
    console.log(params.id);
    dispatch(fetchResidentsbyId(params.id)).then((res) => {
      setDetails(res.payload);
      console.log(res);
    });
  }, [dispatch]);

  return (
    <div>
      {details && (
        <div class='font-sans h-screen w-full flex flex-row justify-center items-center'>
          <div class='card w-96 mx-auto bg-white  shadow-2xl'>
            <img
              class='w-32 mx-auto rounded-full -mt-20 border-8 border-white'
              src='https://avatars.githubusercontent.com/u/67946056?v=4'
              alt=''
            />
            <>
              <div class='text-center mt-2 text-3xl font-medium'>
                {details.fullName}
              </div>
              <div class='text-center mt-2 font-light text-sm'>
                {details.email}
              </div>
              <div class='text-center font-normal text-md'>{details.phone}</div>

              <hr class='mt-8' />
              <div class='flex p-4'>
                <div class='w-1/2 text-center'>
                  Status:
                  <span class='font-bold'> {details.maritalStatus}</span>
                </div>

                <div class='w-1/2 text-center'>
                  Birth Date: <span class='font-bold'>{details.birthDate}</span>
                </div>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
}
