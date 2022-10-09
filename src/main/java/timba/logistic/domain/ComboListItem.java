package timba.logistic.domain;

public interface ComboListItem {
    Long getId();

    String getName();

    void setId(Long id);

    void setName(String name);
    public default String getRepr(){
        return getName();
    }
}
