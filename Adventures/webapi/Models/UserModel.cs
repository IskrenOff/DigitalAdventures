using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class UserModel
    {
        [Display(Name = "User ID")]
        [Range(000000, 999999, ErrorMessage = "You need to enter a valid UserId")]
        public int Id { get; set; }

        [Display(Name = "First Name")]
        [Required(ErrorMessage = "You need to give us your first name.")]
        public string? FirstName { get; set; }

        [Display(Name = "Last Name")]
        [Required(ErrorMessage = "You need to give us your last name.")]
        public string? LastName { get; set; }

        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email address")]
        [Required(ErrorMessage = "You need to give us your email address.")]
        public string? Email { get; set; }

        [Display(Name = "Gender")]
        public string? Gender { get; set; }

        [Display(Name = "UserName")]
        [Required(ErrorMessage = "You need to give us your username.")]
        public string? UserName { get; set; }

        [Display(Name = "Password")]
        [Required(ErrorMessage = "you must have a password.")]
        [DataType(DataType.Password)]
        [StringLength(100, MinimumLength = 10, ErrorMessage = "Your password is not long enough.")]
        public string? Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Your password and confirm password do not match.")]
        public string? ConfirmPassword { get; set; }
    }
}
