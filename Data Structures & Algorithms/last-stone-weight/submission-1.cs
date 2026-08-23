public class Solution {
    public int LastStoneWeight(int[] stones) {
        PriorityQueue<int,int> maxHeap = new PriorityQueue<int,int>();
        foreach(int stone in stones){
            maxHeap.Enqueue(stone, -stone);
        }
        while(maxHeap.Count>1){
            int first = maxHeap.Dequeue();
            int second = maxHeap.Dequeue();
            if(first!=second){
                int diff = Math.Abs(first-second);
                maxHeap.Enqueue(diff, -diff);
            }
        }
        if(maxHeap.Count == 0){
            return 0;
        }
        return maxHeap.Dequeue();
    }
}
