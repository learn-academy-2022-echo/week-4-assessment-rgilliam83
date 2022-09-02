# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_or_even(num1, num2, num3)
    if num1 % 2 == 0
      puts "#{num1} is even"
    else
      puts "#{num1} is odd"
    end
    if num2 % 2 == 0
        puts "#{num2} is even"
      else
        puts "#{num2} is odd"
      end
      if num3 % 2 == 0
        puts "#{num3} is even"
      else
        puts "#{num3} is odd"
      end
  end

  
  p odd_or_even(num1, num2, num3)

#   unsure why im getting an unexpected nil. please advise
  

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowel(string)
    vowels = "aeiouAEIOU"
    string.each_char.to_a.reject{ |text| vowels.include?(text) }.join
   end
p remove_vowel(beatles_album1)
p remove_vowel(beatles_album2)
p remove_vowel(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def is_palindrome(string)
    if string.reverse != string
        return "#{ string } is a palindrome"
    else 
        return "#{ string } is not a palindrome"
    end
end

p is_palindrome(palindrome_tester1)
p is_palindrome(palindrome_tester2)
p is_palindrome(palindrome_tester3)

