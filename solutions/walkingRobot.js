// A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands:

// -2: Turn left 90 degrees.
// -1: Turn right 90 degrees.
// 1 <= k <= 9: Move forward k units, one unit at a time.
// Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command.

// Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25).

// Note:

// North means +Y direction.
// East means +X direction.
// South means -Y direction.
// West means -X direction.

// Example 1:

// Input: commands = [4,-1,3], obstacles = []
// Output: 25
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 3 units to (3, 4).
// The furthest point the robot ever gets from the origin is (3, 4), which squared is 32 + 42 = 25 units away.
// Example 2:

// Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// Output: 65
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
// 4. Turn left.
// 5. Move north 4 units to (1, 8).
// The furthest point the robot ever gets from the origin is (1, 8), which squared is 12 + 82 = 65 units away.
// Example 3:

// Input: commands = [6,-1,-1,6], obstacles = []
// Output: 36
// Explanation: The robot starts at (0, 0):
// 1. Move north 6 units to (0, 6).
// 2. Turn right.
// 3. Turn right.
// 4. Move south 6 units to (0, 0).
// The furthest point the robot ever gets from the origin is (0, 6), which squared is 62 = 36 units away.


function checkObstacle(position,obstacles){
  
    let temp = false;
  
    for(let i = 0; i < obstacles.length; i++){
        
        let test = true;
        
        for(let j = 0; j < obstacles[i].length;j++){
            if(position[j] != obstacles[i][j]){
                test = false;
            }else{
              test = true;
            }
        }
        
        if(test){
            temp = true;
        }
    }
    
    return temp;
}

var robotSim = function(commands, obstacles) {
    
    
    let currPos = [0,0]
    let direction = "up";
    let result = (currPos[0] * currPos[0]) + (currPos[1] * currPos[1]);
    
    
    for(let i = 0; i < commands.length; i++){
      
        if(commands[i] == -1){
            if(direction === "up"){
                direction = "right";
            }
            else if(direction === "right"){
                direction = "down"
            }
            else if(direction === "down"){
                direction = "left"
            }
            else if(direction === "left"){
                direction = "up";
            }
        }
    
        
        if(commands[i] == -2){
          
              if(direction === "up"){
                direction = "left"
            }
            else if(direction === "left"){
                direction = "down"
            }
            else if(direction === "down"){
                direction = "right"
            }
            else if(direction === "right"){
                direction = "up"
            }
        }

    
        
        if(commands[i] >= 0){ 
            if(direction === "up"){
                let temp = currPos;
              for(let j = 0; j < commands[i]; j++){
                temp[1] += 1;
                 if(!checkObstacle(temp,obstacles)){
                    currPos = temp;
                }else{
                   break;
                }
              }
            }
            
            else if(direction === "right"){
              
                let temp = currPos;
              for(let j = 0; j < commands[i]; j++){
                temp[0] += 1;
                 if(!checkObstacle(temp,obstacles)){
                    currPos = temp;
                }else{
                   break;
                }
              }
            }
            
            else if(direction === "down"){
                let temp = currPos;
               for(let j = 0; j < commands[i]; j++){
                temp[1] -= 1;
                 if(!checkObstacle(temp,obstacles)){
                    currPos = temp;
                }else{
                   break;
                }
              }
            }

            else if(direction === "left"){
                let temp = currPos;
              
             for(let j = 0; j < commands[i]; j++){
                temp[0] -= 1;
                 if(!checkObstacle(temp,obstacles)){
                    currPos = temp;
                }else{
                   break;
                }
              }
            }
        } 
        
    let temp = (currPos[0] * currPos[0]) + (currPos[1] * currPos[1]);
        if(temp > result){
            result = temp;
        }
    }

  console.log("Current Position: " + currPos)
  console.log("Farthest Distance Traveled: " + result)
  return result;

}

  robotSim([4,-1,3], [])
  robotSim([4,-1,4,-2,4], [[2,4]])
  robotSim([6,-1,-1,6],[])