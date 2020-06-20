
/* Activate Fountains:

     There is a one-dimensional garden of length n. In each position of the n
	 * length garden, a fountain has been installed. The fountain at the ith
	 * position has a value a[i] (where 1 <= i <= n) that describes the coverage
	 * limit of fountain i. A fountain can cover the range from the position
	 * max(i - a[i], 1) to min(i + a[i], n).
	 * 
	 * For example, if garden length n = 3 and a = {1, 2, 1}, then:
	 * 
	 *   For position 1: a[1] = 1, range = 1 to 2.
	 *   For position 2: a[2] = 2, range = 1 to 3.
	 *   For position 3: a[3] = 1, range = 2 to 3.
     
     123
 a:  121
     --
     ---
      --
     123456......10  
 b:  3351
     ---
      -------
        ---
         -------
	 *   
	 * In the beginning, all the fountains are switched off. Determine the
	 * minimum number of fountains you need to activate so that whole n length
	 * garden will be covered by water. In the example, the 1 found at position
	 * a[2] covers the whole garden.
	 * 
	 * Function Description:
	 * 
	 * Complete the function fountainActivation in the editor below. The function
	 * must return an integer that denotes the minimum number of fountains that
	 * must be activated to cover the entire garden by water.
	 * 
	 * fountainActivation has the following parameter:
	 *   a[a[0], ..., a[n-1]]: an array of integers
	 *   
	 * Constraints:
	 *   - 1 <= n <= 10^5
	 *   0 <= a[i] <= min(n, 100) (where 1 <= i <= 10^5)
	 *  
	 */

int fountainActivation(int[] a) {
    
}

function 



/*
You are a game developer working on a game that randomly generates levels. A level is an undirected graph of rooms, each connected by doors. The player starts in one room, and there is a treasure in another room. Some doors are locked, and each lock is opened by a unique key. A room may contain one of those unique keys, or the treasure, or nothing. 

It wouldn’t be fun if the game gave the player an unsolvable level. You are writing the validation code for that. Implement a representation for a level and write code that, given a starting room, returns true if the treasure can be reached by the player—likely requiring them to find certain other keys first—or false if there is no solution. 

Assume a function f(key_id) = door_id and f(door_id) = key_id
*/

CONST DOORKEYS = []

class Room {
    constructor(doors, treasure, key) {
        this.doors = doors, // array of Door 
        this.treasure = treasure,
        this.key = key
    }
}

class Door {
    constructor(isLocked, startingRoom, endingRoom) {
        this.isLocked = isLocked,
        this.startingRoom = this.startingRoom,
        this.endingRoom = this.endingRoom    
    }
}

function canFindTreasure(startingRoom, treasure) {
    if (startingRoom.treasure === treasure) {
        return true;
    }
    
    
}






