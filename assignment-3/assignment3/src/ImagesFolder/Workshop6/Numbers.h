/*
*****************************************************************************
                        Workshop6 - Part1
Full Name  :    Festus Osayi
Student ID#:    170276216
Email      :    fosayi@myseneca.ca
Section    :    OOP244ZDD
Date	   :	10/25/2022
Authenticity Declaration:
I declare this submission is the result of my own work and has not been
shared with any other student or 3rd party content provider. This submitted
piece of work is entirely of my own creation, and only copied the code that
my professor provided to complete my workshops and assignments..
*****************************************************************************
*/
#ifndef SDDS_NUMBERS_H_
#define SDDS_NUMBERS_H_
#include <iostream>
namespace sdds {
   class Numbers {
      double* m_numbers{};
      char* m_filename{};
      bool m_isOriginal;
      int m_numCount;
      bool isEmpty()const;
      void setEmpty();
      void deallocate();
      void setFilename(const char* filename);
      
   public:
      Numbers();
      Numbers(const char* filename);
      double average()const;
      double max()const;
      double min()const;
      ~Numbers();
      Numbers(const Numbers &other);
      Numbers& operator=(const Numbers & rhs);
      Numbers operator-() const;
      Numbers operator+() const;
      Numbers& sort(bool ascending);
      int numberCount() const;
      bool load();
      void save();
      Numbers &operator+=(double value);
      std::ostream &display(std::ostream &ostr) const;
   };
   //acts as output --> cout
   std::ostream &operator<<(std::ostream &os, const Numbers &N);
   //acts as input --> cin
   std::istream &operator>>(std::istream &istr, Numbers &N);
}
#endif // !SDDS_NUMBERS_H_

