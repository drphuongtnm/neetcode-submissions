public class KthLargest {
    private PriorityQueue<int,int> minHeap;
    private int k;

    public KthLargest(int k, int[] nums) {
        this.k=k;
        this.minHeap = new PriorityQueue<int,int>();
        foreach(int num in nums){
            minHeap.Enqueue(num,num); // mặc định là minHeap
            //Nếu muốn maxHeap thì khi truyền vào hàng đợi cần truyền giá trị âm
            //Ví dụ
            //minHeap.Enqueue(num,-num);
            if(minHeap.Count>k){
                minHeap.Dequeue();
            }
        }
    }
    
    public int Add(int val) {
        minHeap.Enqueue(val,val);
        if(minHeap.Count>k){
            minHeap.Dequeue();
        }
        return minHeap.Peek();
    }
}
