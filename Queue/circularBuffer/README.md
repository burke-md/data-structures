# Circular buffer

A data structure that operates within the FIFO (first in, first out) paradigm. Also, bound by a fixed number of elements. When exceeding that limit, there are a few options. I have, in both cases (the array and node/class based solutions) chosen to remove the oldest element.

## Use case

Often used in an asynchronous environment where the input stream and consumption of data do not directly match each other's pace. 

## Reference 

Circular Queue or Ring Buffer  Python and C Implementation.
https://towardsdatascience.com/circular-queue-or-ring-buffer-92c7b0193326