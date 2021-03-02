lar='fuck'
sma='fuck'
while True:
    y=input('Enter an integer number:')
    if y=='done':
        break
    try:
        x=int(y)
        if lar=='fuck':
            lar=x
        if sma=='fuck':
            sma=x
        if x>lar:
            lar=x
        if x<sma:
            sma=x
    except:
        print('Invalid input')
        continue
print('Maximum is',lar)
print('Minimum is',sma)
