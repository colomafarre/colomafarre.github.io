library(tidyverse)
library(cism)
library(ggthemes)

wb <- cism::wb
indicators <- data_frame(indicator = sort(unique(wb$indicator_name)))

wb_spain <- read_csv('data/API_ESP_DS2_en_csv_v2.csv', skip = 4)
wb_spain <- wb_spain[,1:61]
names(wb_spain)[5:ncol(wb_spain)] <- paste0('y',
                                names(wb_spain)[5:ncol(wb_spain)])

# Make long
wb_spain <- gather(wb_spain,
             year,
             value,
             y1960:y2016)

# Clean up
wb_spain$year <- as.numeric(gsub('y', '', wb_spain$year))

# Rename
names(wb_spain) <- c('country',
               'country_code',
               'indicator_name',
               'indicator_code',
               'year',
               'value')

# Don't save empty stuff
wb_spain <-
  wb_spain %>%
  group_by(indicator_code) %>%
  mutate(flag = length(which(!is.na(value))) == 0) %>%
  ungroup %>%
  filter(!flag) %>%
  dplyr::select(-flag)


indices <- c(indices <- c(3,4,5,11, 12,19, 46, 53, 84, 94, 113, 151, 168, 170, 210, 217, 218, 443, 448, 453, 482, 530, 532, 533, 584, 587, 588, 589, 591, 593, 637, 642,  674, 675, 680, 681, 695, 698, 696, 742,  746, 745, 752, 756, 894, 896, 919, 924, 936, 940, 941, 1020, 1026, 1027, 1035, 1069, 1075: 1080, 1158, 1159, 1176, 1177, 1216:1226, 1297, 1301))
indicators <- indicators[indices,]

# Combine, keeping only those indicators we're interested
df <- wb %>% 
  bind_rows(wb_spain) %>%
  filter(indicator_name %in% indicators$indicator)

# Define funtion for plotting
joe_plot <-
  function(indicator){
    x <- df %>%
      filter(indicator_name == indicator) %>%
      filter(!is.na(value))
    
    has_spain <- 'ESP' %in% x$country_code

    
    the_title <- indicator
    if(the_title == "Adjusted net enrollment rate, primary, female (% of primary school age children)"){
      the_title <- 'Enrollment of girls in primary school'
    }
    if(the_title == 'Incidence of malaria (per 1,000 population at risk)'){
      the_title <- 'Malaria cases per 1,000 people per year'
    }
    if(the_title == 'Prevalence of stunting, height for age (% of children under 5)'){
      the_title <- "Prevalence of stunting" 
    }
    
    title_size <- ifelse(nchar(the_title) > 70,
                         7,
                         ifelse(nchar(the_title) > 55,
                                8,
                                ifelse(nchar(the_title) > 40,
                                       9,
                                       ifelse(nchar(the_title) > 30,
                                              10, 11))))
    
    if(has_spain){
      g <- ggplot(data = x,
                  aes(x = year,
                      y = value,
                      group = country,
                      color = country)) 
    } else {
      g <- ggplot(data = x,
                  aes(x = year,
                      y = value))
    }
    g <- g +
      # geom_point(alpha = 0.7) +
      geom_line(alpha = 0.6, size = 1.5) +
      theme_fivethirtyeight() +
      ggtitle(the_title) +
      theme(plot.title = element_text(family = "Trebuchet MS", 
                                      color="#666666", 
                                      face="bold", 
                                      size=title_size, 
                                      hjust=0)) +
      scale_color_manual(name = 'Country',
                         values = c('darkred', 'darkblue'))
      
    return(g)
  }

options(scipen = '999')
for (i in 1:nrow(indicators)){

  try({
    the_indicator <- indicators$indicator[i]
    the_plot <- joe_plot(the_indicator)
    print(the_plot)
    Sys.sleep(0.3)
    ggsave(filename = paste0('../img/data/',
                             the_indicator, 
                             '.png'))
  })
}


plots <- dir('../img/data')

for (i in 1:length(plots)){
  the_text <- paste0('<a href="/img/data/',
                     plots[i],
                     '"> <img border="0" src= "/img/data/',
                     plots[i],
                     '" width="200"></a>',
                     '\n\n')
  cat(the_text)
}
