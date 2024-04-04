import React from 'react';

const Student = ({ data }) => {
    const { name, pic, designation } = data;
    return (
        <div>
            <div className="card-compact w-96">
                <figure><img src={pic} alt="student" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Student;