// export const handleType = (type, positions) => {
//   if (type==="transition") {
//     return (
//       <>
//         <label htmlFor="start_id" >Starting Position</label>
//         <select 
//           name="start_id" 
//           id="start"
//           onChange={(ev) => handleChange(ev)} 
//         >
//           {positions.map(position => (
//             <option key={position.id} value={position.id} >{position.name}</option>
//           ))}
//         </select>

//         <label htmlFor="finsih_id" >Finishing Position</label>
//         <select 
//           name="finish_id" 
//           id="finish_id" 
//           onChange={(ev) => handleChange(ev)} 
//         >
//           {positions.map(position => (
//             <option key={position.id} value={position.id} >{position.name}</option>
//           ))}
//         </select>
//       </>
//     )
//   } else if (type==="submission") {
//     return (
//       <> 
//         <label htmlFor="position_id" >Position</label>
//         <select 
//           name="position_id" 
//           id="position_id" 
//           onChange={(ev) => handleChange(ev)} 
//         >
//           {positions.map(position => (
//             <option key={position.id} value={position.id} >{position.name}</option>
//           ))}
//         </select>
//       </>
//     )
//   } else {
//     return null
//   }
// }