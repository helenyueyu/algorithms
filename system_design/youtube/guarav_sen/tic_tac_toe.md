## Design Tic Tac Toe 

1. Is this going to be timed (e.g. 2 minutes - like chess timer)? 
2. Are any undo moves allowed? (Useful even if you don't expose to the user - e.g. revert if a move leads to a failure) 
3. Can a game be spectated? 
4. Will there be any statistics stored for users? E.g. winning stats? 
5. Any tournaments? Any AI? Rating change? 


## Board
winner - "draw, tba, one, two"
int[n][n] - int[i][j] in { 0, 1, 2 } (0 not yet played)

* initialize()
* getBoard()
* getWinner()
* getCurrentPlayer() -> switch b/w first and second player 
* makeMove(Move m)

User object
    * `user_id`
    * stats
    
Game object 
    * `id`
    * `user_id1, user_id2`
    * list of moves
    * e.g. user can download game as a .txt file and play offline
    * can undo (.pop())

Implement `makeMove()` and `checkWinner()` in `O(1)` time
    * a win will always incorporate a the square a player just played on, check either their row or col or diag

```java
public class TicTacToe {
    private final int[][] board; 

    public TicTacToe(final int n) {
        board = new int[n][n]; 
    }

    /* 
    move function takes in: 
        @param player (either 1 or 2)
        @param row (move's row index)
        @param col (move's col index)
        @return winner (either 0 (no one wins), 1 or 2)
        @ throw illegal exception if move is illegal 
    */
}
```