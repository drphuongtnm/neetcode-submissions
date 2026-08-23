public class Solution {
    public int MaxProfit(int[] prices) {
        int profit=0;
        int n = prices.Length;
        for(int i=0;i<n;i++){
            for(int j=i+1;j<n;j++){
                int buy = prices[i];
                int sold= prices[j];
                int trans = sold-buy;
                if(trans >0 && trans>profit){
                    profit = trans;
                }
                
            }
        }
        if(profit<0){
            profit=0;
        }
        return profit;
    }
}
