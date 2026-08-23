/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution {    
    public bool IsSubtree(TreeNode root, TreeNode subRoot) {
        if(subRoot == null){
            return true;
        }
        if(root == null){
            return false;
        }
        if(SameTree(root, subRoot)){
            return true;
        }
        return IsSubtree(root.left, subRoot) || IsSubtree(root.right, subRoot);
    }
    private bool SameTree(TreeNode root, TreeNode subroot){
        if(root == null && subroot==null){
            return true;
        }
        if(root != null && subroot !=null && root.val == subroot.val){
            return SameTree(root.left, subroot.left) && SameTree(root.right, subroot.right);
        }
        return false;
    }
}
