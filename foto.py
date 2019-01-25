# https://ubuntuforums.org/showthread.php?t=2022316

import os
import time
import shutil
import sys
import platform
import subprocess
import re

# Define whether speeding up or slowing down (1 = default)
slow_down = 5
# below 1 = fast
# above 1 = slow
if slow_down == 1:
    slow_down_clause = " "
else:
    slow_down_clause = ' -filter:v "setpts=' + str(slow_down) + '*PTS" '


# Work from this directory
os.chdir('/home/colomafarre/Documents/colomafarre.github.io')
this_dir = os.getcwd()

# Get directory of photos
try:
    input_dir = sys.argv[1]
except:
    input_dir = this_dir

print input_dir

# Go to input dir
os.chdir(input_dir)
print 'This working directory: ' + os.getcwd()

# STEP 0
# Capitalization
print 'Step 1----------------------------------'
os.system("rename 's/\.jpg$/.JPG/' *.jpg")

# STEP 2
# Print out the link text
print 'Step 2----------------------------------'

filelist = [ f for f in sorted(os.listdir(input_dir)) if f.endswith(".JPG")]

the_dir = input_dir[49:]
for f in filelist:
    the_text = '\n' + '<a href="' + the_dir + f + '"> <img border="0" src= "' + the_dir + f + '" width="200"></a>' + '\n'
    print the_text
