import React from 'react'

import { useQuery, gql } from '@apollo/client';

const get_student = gql`
  query GetAllstudent {
   students {
      name,
      email,
      age
      
    }
  }
`;

export const Students = () => {
    const { loading, error, data } = useQuery(get_student);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { students } = data;
    return (
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th>age</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std => {
                            return (
                                <tr key={std.id}>
                                    <td>{std.age}</td>
                                    <td>{std.name}</td>
                                    <td>{std.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
