//find the median
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    let totalLength = m + n
    let combined = [...nums1,...nums2].sort((a,b)=>a-b)
    let median = null
    if (totalLength % 2===0){
      median = (combined[totalLength/2-1] + combined[totalLength/2])/2
    }else {
      median = combined[totalLength/2-0.5]
    }
    return median
};
