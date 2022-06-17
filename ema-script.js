//@version=4
study(title="EMA 13/100/200", overlay=true)

shortest = ema(close, 13)
midterm = ema(close, 50)
longer = ema(close, 100)
longest = ema(close, 200)

plot(shortest, color = color.yellow)
plot(midterm, color = color.orange)
plot(longer, color = color.white)
plot(longest, color = color.aqua)

var label1 = label.new(bar_index, low, text="                     ema 13", style= label.style_none, textcolor=color.yellow)
label.set_x(label1, 0)
label.set_y(label1, shortest)
label.set_xloc(label1, time, xloc.bar_time)

var label4 = label.new(bar_index, low, text="                    ema 50", style= label.style_none, textcolor=color.orange)
label.set_x(label4, 0)
label.set_y(label4, midterm)
label.set_xloc(label4, time, xloc.bar_time)

var label2 = label.new(bar_index, low, text="                    ema 100", style= label.style_none, textcolor=color.white)
label.set_x(label2, 0)
label.set_y(label2, longer)
label.set_xloc(label2, time, xloc.bar_time)

var label3 = label.new(bar_index, low, text="                    ema 200", style= label.style_none, textcolor=color.aqua)
label.set_x(label3, 0)
label.set_y(label3, longest)
label.set_xloc(label3, time, xloc.bar_time)
