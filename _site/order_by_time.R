options(echo=FALSE) # if you want see commands in output file
args <- commandArgs(trailingOnly = TRUE)
input_dir <- args[1]
files <- dir(input_dir)
dates <- c()
for (i in 1:length(files)){
  x <- file.info(paste0(input_dir, '/', files[i]))$mtime
  print(x)
  dates[i] <- x
}

# Rearrange
files <- files[order(dates)]

the_dir <- paste0('/img', unlist(strsplit(input_dir, 'img'))[2])
# Print
for (i in 1:length(files)){
  the_text <- 
    paste0('\n',
           '<a href ="',
           the_dir, '/',
           files[i],
           '"> <img border="0" src= "',
           the_dir, '/',
           files[i],
           '" width="200"></a>',
           '\n')
  message(the_text)
    
}
