# Define the recipient's name
recipient_name = "Your Loved One"

# Create a cute ASCII art heart
heart = '''
  /\\   /\\
 /  \\/  \\
 \\      /
  \\    /
   \\  /
    \\/
'''

# Write a heartfelt message
message = f"Dear {recipient_name},\n\n"
message += "You make my heart go pitter-patter, just like this cute heart!\n"
message += "I love you more and more with each passing day. You mean the world to me.\n\n"
message += "With all my love,\nYour Secret Admirer"

# Print the ASCII art heart and message
print(heart)
print(message)

# Save the message to a file
with open("love_note.txt", "w") as file:
    file.write(heart)
    file.write("\n")
    file.write(message)

print("\nYour love note has been saved to 'love_note.txt'.")
