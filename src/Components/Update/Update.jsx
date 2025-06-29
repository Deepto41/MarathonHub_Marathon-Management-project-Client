// import React from 'react';

// const Update = () => {
//     return (
//         <div>
//             {showUpdateModal && selectedMarathon && (
//   <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Update Marathon</h2>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         const form = e.target;
//         const updated = {
//           title: form.title.value,
//           location: form.location.value,
//         };
//         fetch(`https://marathon-hub-project-server.vercel.app/marathons/${selectedMarathon._id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(updated)
//         })
//           .then(res => res.json())
//           .then(data => {
//             setShowUpdateModal(false);
//             window.location.reload(); // Or refetch data
//           });
//       }}>
//         <input name="title" defaultValue={selectedMarathon.title} className="input w-full mb-2" />
//         <input name="location" defaultValue={selectedMarathon.location} className="input w-full mb-4" />
//         <div className="flex justify-end gap-2">
//           <button type="button" onClick={() => setShowUpdateModal(false)} className="btn btn-sm">Cancel</button>
//           <button type="submit" className="btn btn-primary btn-sm">Update</button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}

//         </div>
//     );
// };

// export default Update;