import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

// export const calPlayerPos = function(players){
//   let rank = 1;
//
//   players.map((player,index)=>{
//     if(index !== 0 && player[index-1].score>player.score){
//       rank++;
//     }
//
//     return {
//       ...player,
//       rank,
//       position: numeral(rank).format('0o')
//     };
//   });
// }
