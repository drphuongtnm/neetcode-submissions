/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot){
            return true;
        }
        if(!root){
            return false
        }
        if(this.dfs(root, subRoot)){
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
    dfs(root, subRoot){
        if(!root && !subRoot){
            return true;
        }
        if(root && subRoot && root.val === subRoot.val){
            return (this.dfs(root.left, subRoot.left) && this.dfs(root.right, subRoot.right));
        }else{
            return false;
        }
    }
}
