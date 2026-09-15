class DSU {
    constructor(n) {
        this.Parent = Array(n+1).fill(0).map(_, i => i);
        this.Size = Array(n+1).fill(1);
    }

    find(node) {
        if (this.Parent[node] !== node) {
            this.Parent[node] = this.find(this.Parent[node]);
        }
        return this.Parent[node];
    }


}

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands=0;

        const bfs = (r, c) => {
            const queue = [[r, c]];
            grid[r][c] = '0';
            while(queue.length){
                const [row,col] = queue.shift();
                for(const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]){
                    const nr = row + dr, nc = col + dc;
                    if(nc >= 0 && nr >= 0 && nc < COLS && nr < ROWS && grid[nr][nc] === '1'){
                        grid[nr][nc] = '0';
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        for (let r=0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                if (grid[r][c] === '1') {
                    islands++;
                    bfs(r, c);
                }
            }
        }

        return islands;
    }
}
